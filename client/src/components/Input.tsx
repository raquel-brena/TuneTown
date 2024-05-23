interface InputProps {
    label: string
}

function Input(props: InputProps) {
    return (
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-semibold select-none">
          {props.label}
        </label>
        <input
          className="rounded-sm h-8 appearance-none bg-slate-200 relative
           px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] 
           sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] 
            bg-transparent ring-1 ring-white/30 placeholder:text-zinc-500 sm:text-sm/6 
            text-base/6
            block
            focus:ring-0 
            hover:ring-white/40
            after:inset-0 after:rounded-lg
           "
          name="full_name"
        />
      </div>
    );
}

export default Input;