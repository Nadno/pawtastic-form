export default function getInputNames(): string[] {
  const form = document.getElementById('pawtasticForm') as HTMLElement;
  let names: string[] = [];

  const getNames = ({ name }: HTMLInputElement) => {
    if (!names.includes(name)) {
      names.push(name);
    }
  };

  form.querySelectorAll<HTMLInputElement>('input').forEach(getNames);

  return names;
}
