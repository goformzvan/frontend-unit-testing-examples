import './MyButton.css';

export type ButtonProps = {
  count: number;
  onClick: (currentCount: number) => void;
};

export default function CountButton(props: ButtonProps) {
  return <button onClick={() => props.onClick(props.count)}>Count</button>;
}
