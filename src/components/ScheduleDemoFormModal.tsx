import { useEffect } from "react";
import { X } from "lucide-react";
import ScheduleDemoForm from "./ScheduleDemoForm";

export type ScheduleDemoFormModalProps = {
    open: boolean;
    onClose: () => void;
    /** Passed to `ScheduleDemoForm` so field ids stay unique when multiple modals exist */
    formIdPrefix: string;
};

export default function ScheduleDemoFormModal({ open, onClose, formIdPrefix }: ScheduleDemoFormModalProps) {
    const titleId = `${formIdPrefix}-modal-title`;

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-black/52 px-3 py-8 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]"
            role="presentation"
            onClick={onClose}
        >
            <div
                className="relative my-auto w-full max-w-xl rounded-[14px] border border-[#D4D9E2] bg-white px-4 pb-5 pt-10 shadow-[0_14px_32px_rgba(2,12,36,0.28)] sm:px-6 sm:pb-6 sm:pt-11 md:max-w-[28rem]"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-red-700 bg-red-600 text-white shadow-md transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    aria-label="Close booking form"
                >
                    <X className="h-5 w-5 stroke-[2.5]" aria-hidden />
                </button>

                <h2
                    id={titleId}
                    className="pr-10 text-center font-['Open_Sans',Arial,sans-serif] text-xl font-bold leading-tight tracking-[-0.02em] text-[#0B1A3C] sm:text-2xl"
                >
                    Book your free demo
                </h2>
                <p className="mt-2 text-center font-['Poppins',Arial,sans-serif] text-sm leading-relaxed text-[#5A6E91] sm:text-[0.95rem]">
                    Fill in your details and our team will contact you shortly.
                </p>
                <ScheduleDemoForm mode="api" idPrefix={formIdPrefix} className="!mt-4 !space-y-3" />
            </div>
        </div>
    );
}
