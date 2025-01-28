import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
        // style={{ display: 'grid',
        //   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        //   gridGap: '1rem' }}
      />
    </div>
  );
}
