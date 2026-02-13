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
      <section className="task-modal-card">
        <div className="mb-5 flex flex-col gap-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          <label className="text-sm font-semibold text-[var(--muted)]">{label}</label>
          <input
            className="task-modal-input"
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
