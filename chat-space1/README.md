 ## usersテーブル
  |Colum|Type|Options|
  |-----|----|-------|
  |name|string|null: false, index: true,unique: true|
  
  ### Association
  - has_many :messages
    has_many :members
    has_many :groups, through: :members
    

 ## groupsテーブル
  |Colum|Type|Options|
  |-----|----|-------|
  |name|string|null: false|
  
  ### Association
  has_many :members
  has_many :messages
  has_many :users, through: :members
  


## membersテーブル

  |Column|Type|Options|
  |------|----|-------|
  |group_id|references|null: false, foreign_key: true|
  |user_id|references|null: false, foreign_key: true|
  
  ### Association
  - belongs_to :group
  - belongs_to :user

## messagesテーブル
 |Column|Type|Options|
 |------|----|-------|
 |user_id|references|null: false, foreign_key: true|
 |group_id|references|null: false, foreign_key: true|
 |message|text|
 |image|string|

 ### Association
  belongs_to :user
  belongs_to :group