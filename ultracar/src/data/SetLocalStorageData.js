export default function SetLocalStorageData(updatedData) {
    localStorage.setItem("services", JSON.stringify(updatedData));
}