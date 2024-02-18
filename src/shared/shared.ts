export function selectCompare(x: any, y: any): boolean {
    return x == null || y == null ? false : x.id == y.id;
}