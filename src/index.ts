import { Injectable } from "./decorators/Injectable";
import LogMethodCall from "./decorators/LogMethodCall";
import rootContainer from "./ioc/ContainerIoC";

@Injectable(
    {
        key: "TEST_KEY", 
        isSingleton: true
    }
)
class Test{

    @LogMethodCall
    public doTest( param:string){
        console.log("le message est: ", param);
    }

}

const test1 = rootContainer.resolve<Test, any>("TEST_KEY");
const test2 = rootContainer.resolve<Test, any>("TEST_KEY");

test1?.doTest("hello world");
test1?.doTest("tagazou");

// console.log(test1 === test2);

