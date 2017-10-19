export class StringUtils{

  public static cleanUp(str: string): string{
      return str.replace(/[^a-zA-Z0-9]+/g, "");
  } 

}