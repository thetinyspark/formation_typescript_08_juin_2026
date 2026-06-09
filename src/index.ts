import { Injectable } from "./decorators/Injectable";
import rootContainer from "./ioc/ContainerIoC";

@Injectable(
    {
        key: "TEST_KEY", 
        isSingleton: true
    }
)
class Test{}

const test1 = rootContainer.resolve<Test, any>("TEST_KEY");
const test2 = rootContainer.resolve<Test, any>("TEST_KEY");

console.log(test1 === test2);

