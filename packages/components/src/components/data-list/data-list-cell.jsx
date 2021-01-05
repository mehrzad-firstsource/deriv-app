import classNames from 'classnames';
import React from 'react';

const DataListCell = ({ className, column, is_footer, row }) => {
    if (!column) return null;
    const { col_index, title } = column;
    const cell_value = row[col_index];
    return (
        <div className={classNames(className, column.col_index)}>
            {!is_footer && (
                <div className={classNames(`${column.col_index}__row-title`, 'data-list__row-title')}>
                    {column.renderHeader ? column.renderHeader({ title }) : title}
                </div>
            )}
            <div className='data-list__row-content'>
                {column.renderCellContent
                    ? column.renderCellContent({ cell_value, row_obj: row, is_footer })
                    : cell_value}
            </div>
        </div>
    );
};

export default React.memo(DataListCell);
