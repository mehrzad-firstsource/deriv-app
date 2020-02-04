import { expect } from 'chai';
import { parts } from './tools';
import { createInterpreter } from '../utils/cliTools';

describe('Run Interpreter over bot', () => {
    let value;

    beforeAll(done => {
        let interpreter = createInterpreter();
        interpreter.run(
            `
      (function (){
        ${parts.tickTrade}
        while(watch('before')) {}
      })();
    `
        );

        setTimeout(() => {
            interpreter.stop();
            interpreter = createInterpreter();
            interpreter
                .run(
                    `
        (function (){
          ${parts.tickTrade}
          ${parts.waitToPurchase}
          ${parts.waitToSell}
          return true;
        })();
      `
                )
                .then(v => {
                    value = v;
                    done();
                });
        }, 8000);
    });
    it('Code block is executed correctly', () => {
        expect(value).to.be.equal(true);
    });
});
