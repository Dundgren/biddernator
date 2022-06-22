import axios from "axios"

const baseUrl = "https://free.currconv.com/api/v7/";
const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;

export async function convertCurrency(fromCurr: string, toCurr: string, amount: number) {
    const query = `${fromCurr}_${toCurr}`;
    const result = await axios.get(`${baseUrl}convert?q=${query}&compact=ultra&apiKey=${apiKey}`);
    const value = result.data[query];
    const convertedAmount = amount * value;

    return convertedAmount;
}
