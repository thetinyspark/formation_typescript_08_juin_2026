export function LogParam(target: any, methodName: string, paramIndex: number) {
  console.log(`Paramètre #${paramIndex} de ${methodName} ${target}`);
}
