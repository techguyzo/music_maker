export const TWButton = (props: any) => {
  const { text, textColor, className, onClick } = props;
  return (
    <>
      <button
        onClick={onClick}
        className={`rounded-xl flex items-center justify-center py-4 ${className}`}
      >
        <div className={`${textColor}`}>{text}</div>
      </button>
    </>
  );
};
