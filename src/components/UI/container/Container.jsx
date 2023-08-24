import css from './Container.module.css';

export default function Container(props) {
  console.log('props.className ===', props.className);

  let calculatedClass = css.container;

  if (props.className) {
    calculatedClass += ` ${props.className}`;
  }

  return <div className={calculatedClass}>{props.children}</div>;
}
