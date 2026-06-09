import rootContainer from "../ioc/ContainerIoC";

export function Inject<T>(key:string, ...params:any[]){
    return rootContainer.resolve<T,any>(key, ...params);
}