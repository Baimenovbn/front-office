import React from 'react';
import { formatBytes } from '../../helpers/helpers';

const AcceptedFileInfo = ({ file, onDelete }: {file: File, onDelete: () => void}) => {
    return (
        <div className="accepted-file align-center gap-5">

          <div className="accepted-file__info align-center">

            <div className="align-center gap-5">
              <span className="accepted-file__folder material-icons material-icons-outlined">
                  folder
              </span>
              <span className="accepted-file__name">{file.name}</span>
            </div>

            <span className="accepted-file__size">{formatBytes(file.size)}</span>

          </div>

          <span className="material-icons accepted-file__icon" onClick={onDelete}>
            delete_forever
          </span>

        </div>
    )
}

export default AcceptedFileInfo;
