export const TWButton = (props: any) => {
  const { text, textColor, className } = props;
  return (
    <>
      <button
        className={`rounded-xl flex items-center justify-center py-4 ${className}`}
      >
        <div className={`${textColor}`}>{text}</div>
      </button>
    </>
  );
};
