import * as React from 'react';

export interface Props {
  title: string;
  children: string;
}

const HTML = props => {
  const { title, children } = props;
  return (
    <div>
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title>{title}</title>
        </head>
        <body>
          <div id='root' dangerouslySetInnerHTML={{ __html: children }} />
          <script src='/bundle.js' async charSet='utf-8' />
        </body>
      </html>
    </div>
  );
};

export default HTML;
