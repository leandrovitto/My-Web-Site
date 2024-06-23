import { Highlight, themes } from "prism-react-renderer";

export default function Code(props) {
    const { children, lang = "jsx" } = props;

    const exampleCode = children.trim();

    return (
        <Highlight
            code={exampleCode}
            language={lang}
            theme={themes.dracula}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={"text-sm p-4 rounded-md"} style={style}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}
