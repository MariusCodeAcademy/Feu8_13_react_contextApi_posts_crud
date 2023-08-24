import css from './Btn.module.css';

export default function Btn(props) {
  return <button className={css.btn}>{props.children}</button>;
}
