module ApplicationHelper
  def show_my_armies
    if @my_armies.nil?
      render "armies/my_armies_table"
    else
      render "armies/you_have_no_armies"
    end
  end

  def show_public_armies
    render "armies/public_armies_table" unless @public_armies.nil?
  end

  def army_name(army)
    (army.name == '' ? 'Army' : army.name)
  end

  def faction_name(army)
    (army.faction.nil? ? '' : army.faction.name)
  end

end
