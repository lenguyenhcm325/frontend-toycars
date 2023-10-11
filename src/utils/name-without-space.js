export const nameWithoutSpace = (name) => {

    let regex = /\s/g;
    let replaceChar = "_";
    return name.replace(regex,replaceChar)

}
