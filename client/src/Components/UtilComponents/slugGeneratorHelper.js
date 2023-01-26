const slugGeneratorHelper = (str, id, num) => {
    let url = str.replace(" ", "_").lowercase();
    if (id) {
        url = url + id.slice(-num, 0);
    }
    return url;
}

export default slugGeneratorHelper;
