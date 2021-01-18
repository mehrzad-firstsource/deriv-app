import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Text } from '@deriv/components';
import { Localize, localize } from '@deriv/translations';
import { WS } from 'Services/ws-methods';
import FileUploader from './file-uploader.jsx';

const FileProperties = () => {
    const properties = [
        { name: 'size', icon: 'IcPoaFileEightMb', text: 'Less than 8MB' },
        { name: 'format', icon: 'IcPoaFileFormat', text: 'JPEG  JPG  PNG  PDF  GIF' },
        { name: 'time', icon: 'IcPoaFileTime', text: '1 - 6 months old' },
        { name: 'clear', icon: 'IcPoaFileClear', text: 'A clear colour photo or scanned image' },
        {
            name: 'with-address',
            icon: 'IcPoaFileWithAddress',
            text: 'Issued under your name with your current address',
        },
    ];
    return (
        <div className='account-poa__upload-property'>
            {properties.map(item => (
                <div
                    className={`account-poa__upload-property-item account-poa__upload-property-${item.name}`}
                    key={item.name}
                >
                    <div className='account-poa__upload-property-wrapper'>
                        <Icon icon={item.icon} className='account-poa__upload-icon-dashboard' size={40} />
                        <Text size='xxxs' weight='bold' align='center'>
                            {localize(item.text)}
                        </Text>
                    </div>
                </div>
            ))}
        </div>
    );
};

const FileUploaderContainer = ({ is_dashboard, is_description_disabled, getSocket, onFileDrop, onRef }) => {
    const ref = React.useRef();

    const getSocketFunc = getSocket ?? WS.getSocket;

    React.useEffect(() => {
        if (ref) {
            if (typeof onRef === 'function') onRef(ref);
        }
        return () => onRef(undefined);
    }, [onRef, ref]);
    if (is_dashboard) {
        return (
            <div className='account-poa__upload-section account-poa__upload-section-dashboard'>
                <div className='account-poa__upload-file account-poa__upload-file-dashboard'>
                    <FileProperties />
                    <div className='account-poa__upload-file-zone'>
                        <FileUploader
                            getSocket={getSocketFunc}
                            ref={ref}
                            onFileDrop={onFileDrop}
                            is_dashboard={is_dashboard}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='account-poa__upload-section'>
            {!is_description_disabled && (
                <ul className='account-poa__upload-list'>
                    <li className='account-poa__upload-box'>
                        <Icon icon='IcUtility' className='account-poa__upload-icon' size={20} />
                        <div className='account-poa__upload-item'>
                            <Localize i18n_default_text='A recent utility bill (e.g. electricity, water, gas, phone or internet)' />
                        </div>
                    </li>
                    <li className='account-poa__upload-box'>
                        <Icon icon='IcBank' className='account-poa__upload-icon' size={20} />
                        <div className='account-poa__upload-item'>
                            <Localize i18n_default_text='A recent bank statement or government-issued letter with your name and address' />
                        </div>
                    </li>
                    <li className='account-poa__upload-box'>
                        <Icon icon='IcUser' className='account-poa__upload-icon' size={20} />
                        <div className='account-poa__upload-item'>
                            <Localize i18n_default_text='Issued under your name with your current address' />
                        </div>
                    </li>
                    <li className='account-poa__upload-box'>
                        <Icon icon='IcLessThanEight' className='account-poa__upload-icon' size={20} />
                        <div className='account-poa__upload-item'>
                            <Localize i18n_default_text='Less than 8MB' />
                        </div>
                    </li>
                    <li className='account-poa__upload-box'>
                        <Icon icon='IcClock' className='account-poa__upload-icon' size={20} />
                        <div className='account-poa__upload-item'>
                            <Localize i18n_default_text='1 - 6 months old' />
                        </div>
                    </li>
                    <li className='account-poa__upload-box'>
                        <Icon icon='IcEye' className='account-poa__upload-icon' size={20} />
                        <div className='account-poa__upload-item'>
                            <Localize i18n_default_text='A clear colour photo or scanned image' />
                        </div>
                    </li>
                </ul>
            )}
            <div className='account-poa__upload-file'>
                <FileUploader getSocket={getSocketFunc} ref={ref} onFileDrop={onFileDrop} />
            </div>
        </div>
    );
};

FileUploaderContainer.defaultProps = {
    is_description_disabled: false,
};

FileUploaderContainer.propTypes = {
    is_dashboard: PropTypes.bool,
    is_description_disabled: PropTypes.bool,
    getSocket: PropTypes.func,
    onFileDrop: PropTypes.func,
    onRef: PropTypes.func,
};

export default FileUploaderContainer;
