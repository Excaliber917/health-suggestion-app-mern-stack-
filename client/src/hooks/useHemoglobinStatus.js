export const useHemoglobinStatus = (hemoglobin) => {
    // console.log(hemoglobin)
    if (!hemoglobin || hemoglobin<0)
        return `no result`

    if (hemoglobin < 13.5) {
        return 'Low Hemoglobin';
    } else if (hemoglobin > 17.5) {
        return 'High Hemoglobin';
    } else {
        return 'Normal Hemoglobin';
    }

}