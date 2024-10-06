const world = 'Hello';

export function hello(who: string = world ): string {
    return `Hello ${who} `;
}