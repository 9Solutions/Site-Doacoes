const cleanBase64String = (base64) => {
    // Remove any characters that are not part of the base64 alphabet
    const base64Alphabet = /^[A-Za-z0-9+/]+={0,2}$/;
    if (!base64Alphabet.test(base64)) {
        throw new Error("Invalid base64 string");
    }

    // Ensure the string length is a multiple of 4
    while (base64.length % 4 !== 0) {
        base64 += "=";
    }

    return base64;
};

export const base64ToBlob = (base64, contentType) => {
    const byteCharacters = atob(cleanBase64String(base64));
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
}

export const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result.split(',')[1]); // Extract base64 part
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}


export const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = (error) => reject(error);
    });
};