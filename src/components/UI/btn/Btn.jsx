import css from './Btn.module.css';

export default function Btn(props) {
  const calcType = props.sub ? 'submit' : 'button';
  return (
    <button type={calcType} onClick={props.onClick} className={css.btn}>
      {props.children}
    </button>
  );
}
