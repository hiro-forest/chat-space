json.user_name  @message.user.name
json.date  @message.created_at.strftime("%Y/%m/%d %H:%M")
json.content  @message.content
json.image @message.image.url
json.id @message.id