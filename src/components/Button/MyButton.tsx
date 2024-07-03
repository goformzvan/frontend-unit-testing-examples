import './MyButton.css';

export type ButtonProps = {
  children: string;
  onClick: VoidFunction;
};

export default function MyButton(props: ButtonProps) {
  return (
    <button className="my-button" onClick={() => props.onClick()}>
      {props.children}
    </button>
  );
}
