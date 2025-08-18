export default class SaveProjectPlugin extends HTMLElement {
    docs: Record<string, XMLDocument>;
    doc: XMLDocument;
    docName: string;
    run(): Promise<void>;
}
