import { useCallback, useEffect, useState } from "react";

interface useConversionRateParams {
  baseCode: string;
  targetCode: string;
}
interface useConversionRateResult {
  conversionRate: number | null;
  isLoading: boolean;
  error: string;
  clearError: () => void;
}

function useConversionRate({
  baseCode,
  targetCode,
}: useConversionRateParams): useConversionRateResult {
  const [conversionRate, setConversionRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getConversionRate = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/${
          import.meta.env.VITE_API_KEY
        }/pair/${baseCode}/${targetCode}`
      );
      const data = await res.json();
      setConversionRate(data.conversion_rate);
    } catch {
      setError("Something get wrong");
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, baseCode, targetCode, setError]);

  const clearError = () => setError("");

  useEffect(() => {
    getConversionRate();
  }, [getConversionRate]);

  return { conversionRate, isLoading, error, clearError };
}

export default useConversionRate;
