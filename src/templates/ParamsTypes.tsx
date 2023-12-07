// Defines a type for route parameters where each parameter (key) is a string and its corresponding value is either a string or undefined.
// This allows for flexible access to any URL parameter, which is necessary for the useParams hook in react-router-dom.
export interface TemplateParamTypes {
  [key: string]: string | undefined;
}
