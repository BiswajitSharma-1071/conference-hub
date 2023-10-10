import React from "react";

type ICardProps = {
  children: JSX.Element | React.ReactNode;
};

type ISelectableCard = {
  selected?: boolean;
  handleClick: () => void;
  children: JSX.Element | React.ReactNode;
};

type ISelectableCardTitle = {
  title: string;
  description?: string;
  selected: boolean;
  handleClick: () => void;
};

const Card = ({ children }: ICardProps) => {
  return <div className="card">{children}</div>;
};

export const SelectableCard = ({
  selected,
  handleClick,
  children,
}: ISelectableCard) => {
  return (
    <Card>
      <div
        className={`selectable ${selected ? "selected" : ""}`}
        onClick={handleClick}
      >
        {children}
        <div className="check">
          <span className="checkmark">✔</span>
        </div>
      </div>
    </Card>
  );
};

export const SelectableTitleCard = ({
  title,
  description,
  selected,
  handleClick,
}: ISelectableCardTitle) => {
  return (
    <SelectableCard handleClick={handleClick} selected={selected}>
      <div className="content">
        <h2 className="title">{title}</h2>
        {description ? <p className="description">{description}</p> : null}
      </div>
    </SelectableCard>
  );
};


