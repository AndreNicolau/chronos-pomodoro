type DefaultInputProps = {
  type: 'text' | 'number' | 'search';
};

export function DefaultInput({ type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor='input'>Task</label>
      <input type={type} id='input' />
    </>
  );
}
