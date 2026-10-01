import { cn } from "../../utils/helpers";

export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  placeholder,
  options,
  as = "input",
  rows = 4,
  className = "",
  accept,
  fileLabel,
}) {
  const baseClasses = cn(
    "w-full rounded-lg border px-4 py-3 text-sm text-brand-ink placeholder:text-brand-gray/70 transition-colors bg-white",
    "focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow",
    error ? "border-red-400" : "border-black/10"
  );

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={name} className="text-sm font-semibold text-brand-navy">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={cn(baseClasses, "resize-none")}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : as === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={baseClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        >
          <option value="">{placeholder || "Select an option"}</option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : as === "file" ? (
        <div>
          <label
            htmlFor={name}
            className={cn(
              "flex items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 text-sm text-brand-gray cursor-pointer hover:border-brand-yellow hover:bg-brand-blue-50/50 transition-colors text-center",
              error ? "border-red-400" : "border-black/15"
            )}
          >
            {fileLabel || "Click to upload (PDF, DOC — max 5MB)"}
          </label>
          <input
            id={name}
            name={name}
            type="file"
            accept={accept}
            onChange={onChange}
            className="hidden"
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        </div>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}

      {error && (
        <span id={`${name}-error`} className="text-xs font-medium text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}
