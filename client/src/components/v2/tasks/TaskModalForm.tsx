import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

interface TaskModalFormProps {
  open: boolean;
  title: string;
  label: string;
  placeholder: string;
  submitLabel: string;
  initialValue?: string;
  onSubmit: (value: string) => void;
  onClose: () => void;
}

const TaskModalForm: React.FC<TaskModalFormProps> = ({
  open,
  title,
  label,
  placeholder,
  submitLabel,
  initialValue = "",
  onSubmit,
  onClose,
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue, open]);

  const trimmedValue = value.trim();
  const isDisabled = trimmedValue.length === 0;

  return (
    <Modal open={open} onClose={onClose}>
      <section
        className="absolute top-1/2 left-1/2 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl"
      >
        <div className="mb-5 flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <label className="text-sm font-semibold text-slate-600">{label}</label>
          <input
            className="rounded-xl border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-blue-500"
            placeholder={placeholder}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            autoFocus
          />
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outlined" color="error" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => onSubmit(trimmedValue)}
            disabled={isDisabled}
          >
            {submitLabel}
          </Button>
        </div>
      </section>
    </Modal>
  );
};

export default TaskModalForm;
