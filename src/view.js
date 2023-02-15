export const createHeader = () => {
    const header = document.createElement('header');

    header.style.backgroundColor = 'green';
    header.style.width = '100%';

    const hello = document.createElement('h1');
    hello.textContent = 'Hello';
    hello.style.color = 'white';
    hello.style.margin = 0;
    hello.style.padding = '24px';

    header.append(hello);

    return header;
}