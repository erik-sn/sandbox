
import * as React from 'react';

import Article from '../../models/article';
import Tag from '../../models/tag';

export interface IEditBoxProps {
  article: Article;
  change: (event: React.FormEvent<any>) => void;
  changePublish: () => void;
}

export interface IEditBoxState {
  tagValue: string;
}

class EditBox extends React.Component<IEditBoxProps, IEditBoxState> {

  constructor(props: IEditBoxProps) {
    super(props);
    this.state = {
      tagValue: this.parseInitialTagValue(props.article.tags),
    };
    this.handleTagChange = this.handleTagChange.bind(this);
  }

  public componentWillReceiveProps(nextProps: IEditBoxProps) {
    if (this.props.article.id !== nextProps.article.id) {
      const tagValue = this.parseInitialTagValue(nextProps.article.tags);
      this.setState({ tagValue });
    }
  }

  public parseInitialTagValue(tags: Tag[]): string {
    return tags.reduce((str, tag) => str + tag.name + ', ', '');
  }

  public handleTagChange(event: React.FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    const { change } = this.props;
    const { name, value } = event.currentTarget;
    const eventInformation: any = { currentTarget: { name, value }};
    this.setState({ tagValue: value }, () => change(eventInformation));
  }

  public render(): JSX.Element {
    const { change, changePublish, article } = this.props;
    return (
      <div id="edit_box__container" className="box_container">
        <input name="title" onChange={change} value={article.title} />
        <input name="description" onChange={change} value={article.description} />
        <textarea
          id="edit_box__text"
          name="text"
          value={article.text}
          onChange={change}
        />
        <input name="tags" onChange={this.handleTagChange} value={this.state.tagValue} />
        <div id="edit_box__published-container">
          <span>Published:</span>
          <input type="checkbox" name="published" onChange={changePublish} checked={article.published} />
        </div>
      </div>
    );
  }
};

export default EditBox;
