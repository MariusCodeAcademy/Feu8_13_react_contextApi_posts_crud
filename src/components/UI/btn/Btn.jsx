import css from './Btn.module.css';

export default function Btn(props) {
  return (
    <button onClick={props.onClick} className={css.btn}>
      {props.children}
    </button>
  );
}
