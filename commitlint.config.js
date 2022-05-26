module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],

  // parserPreset: {
  //   parserOpts: {
  //     headerPattern: /^(\w*)(\((\w*)\))?:\s*(.*)\s*--((story|bug|task|issue)=[\d,]+)$/,
  //     headerCorrespondence: ['type', '', 'scope', 'subject', 'ticket'],
  //   },
  // },

  // rules: {
  //   'header-max-length': [0, 'always', 72],
  //   'ticket-empty': [2, 'never'],
  // },

  // plugins: [
  //   {
  //     rules: {
  //       'ticket-empty': (input, when) => {
  //         const { ticket } = input;
  //         if (!!ticket ^ when === 'never') return [
  //           false,
  //           `Your commit message should${when === 'never' ? ' ' : ' not '}contain ticket info, which match "--(story|bug|task|issue)=\\d*" expression`,
  //         ];
  //         return [true];
  //       },
  //     },
  //   },
  // ],
};
