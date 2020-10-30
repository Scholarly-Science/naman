import React, {Component} from 'react';
import './TextEditor.css';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import FormatBoldRoundedIcon from '@material-ui/icons/FormatBoldRounded';
import FormatItalicRoundedIcon from '@material-ui/icons/FormatItalicRounded';
import FormatUnderlinedSharpIcon from '@material-ui/icons/FormatUnderlinedSharp';

class Editors extends Component{
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = editorState => this.setState({editorState});
  }


  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

    onItalicClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
     }

     onBoldClick = () => {
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
     }

     onUnderlineClick = () => {
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'))
     }

  render() {
    return (
      <div className='editor'>
        <Editor 
            value={this.props.value}
            editorState={this.state.editorState} 
            placeholder="Hello World" 
            onChange={this.onChange} 
            handleKeyCommand={this.handleKeyCommand}
            className='editor__textarea'
          />
        <div className='editor__buttons'>
            <div onClick={this.onBoldClick}>
                <FormatBoldRoundedIcon />
            </div>
            <div onClick={this.onItalicClick}>
                <FormatItalicRoundedIcon />
            </div>
            <div onClick={this.onUnderlineClick}>
                <FormatUnderlinedSharpIcon />
            </div>
        </div>

             
      </div>
    );
  }
}

export default Editors;
