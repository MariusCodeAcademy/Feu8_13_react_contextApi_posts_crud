import css from './Container.module.css';

export default function Container(props) {
  return <div className={css.container}>{props.children}</div>;
}
