export type ToastVariant = "success" | "error" | "info";

export type ToastOptions = {
    message: string
    varient?: ToastVariant
    duration?: number
}

export const DEFAULT_DURATION = 3000