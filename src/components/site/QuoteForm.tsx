import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { products } from "@/lib/products";

const inputClass =
  "w-full border border-hairline bg-background px-4 py-3 text-sm outline-none placeholder:text-subtle focus:border-brand";

export function QuoteForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    product: defaultProduct,
    message: "",
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.includes("@")) {
      setError("Please add your name and a valid email address.");
      return;
    }
    setError("");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-hairline px-6 py-10 text-center">
        <p className="font-display text-xl">Thank you, {form.name.split(" ")[0]}.</p>
        <p className="mt-3 text-sm text-subtle">
          Your request has been received. Our team will respond with a quotation shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <input className={inputClass} placeholder="Name" value={form.name} onChange={set("name")} />
      <input
        className={inputClass}
        placeholder="Company"
        value={form.company}
        onChange={set("company")}
      />
      <input
        className={inputClass}
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={set("email")}
      />
      <select className={inputClass} value={form.product} onChange={set("product")}>
        <option value="">Product Requirement</option>
        {products.map((p) => (
          <option key={p.slug} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>
      <textarea
        className={`${inputClass} min-h-28 resize-none`}
        placeholder="Message"
        value={form.message}
        onChange={set("message")}
      />
      {error ? <p className="micro text-brand">{error}</p> : null}
      <div className="flex justify-end">
        <button
          type="submit"
          aria-label="Send request"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-brand-foreground transition-opacity hover:opacity-90"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </form>
  );
}
