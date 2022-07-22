// função para fazer o download para determinado arquivo.

export const download = (url: string): void => {
  const filePath = url.replace('\\/', '/');

  const element = document.createElement('a');
  element.href = filePath;
  //@ts-ignore
  element.innerHTML = element.download = filePath.split('/').pop();

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
