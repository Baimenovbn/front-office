export function getBase64(file: File | null | undefined): Promise<string | ArrayBuffer | null> {
  if (!file) {
    return new Promise(res => res(null));
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
