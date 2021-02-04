export default function getInputNames(step: number): string[] {
  const form = document.getElementById('pawtasticForm') as HTMLElement;
  const currentFieldset = Array.from(
    form.querySelectorAll<HTMLFieldSetElement>('fieldset')
  )[step];

  let names: string[] = [];

  const getNames = ({ name }: HTMLInputElement) => {
    if (!names.includes(name)) {
      names.push(name);
    }
  };

  currentFieldset.querySelectorAll<HTMLInputElement>('input').forEach(getNames);

  return names;
}
