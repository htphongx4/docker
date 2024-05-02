export interface IDocument {
  id: string | number;
  name: string;
  file: string;
}
export interface IEditDocumentForm {
  name: string;
  file: string;
}
export interface IDocumentColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: string;
}

export interface ISearchDocumentForm {
  name: string;
}
