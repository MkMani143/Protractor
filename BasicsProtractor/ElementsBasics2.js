const {calculator} = require("./Datas2");

const calc=new calculator

describe('Elements Basics', ()=> {

    beforeAll(()=>{
        calc.URL();
    })

    it('Protractor Demo App', async ()=>{
        await calc.FirstInput(2);
        await calc.SecondInput(3);
        await calc.Sel_operatorType("ADDITION");
        await calc.goBtn();
        await calc.Get_result();
        expect(await calc.get_result.getText()).toBe("5");
        expect(await calc.get_result.getText()).toEqual("5");
        await calc.FirstInput(2);
        await calc.SecondInput(3);
        await calc.Sel_operatorType("MULTIPLICATION");
        await calc.goBtn();
        await calc.Get_result();
        expect(await calc.get_result.getText()).toBe("6");
        await calc.Get_count();
        await calc.Get_Result_from_list();
    })
})