document.write(`
<div class="border-b-2 border-line-strong">
  <div class="flex items-center justify-between px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-body-dim">
    Loot
    <span class="rounded-full border border-line bg-ink-raised px-1.5 font-semibold normal-case tracking-normal">32</span>
  </div>
  <div class="px-2 pb-2">
    <a id="Loot:AddItem" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/AddItem.html">AddItem</a>
    <a id="Loot:AddLooter" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/AddLooter.html">AddLooter</a>
    <a id="Loot:Clear" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/Clear.html">Clear</a>
    <a id="Loot:GenerateMoney" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/GenerateMoney.html">GenerateMoney</a>
    <a id="Loot:GetContainer" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/GetContainer.html">GetContainer</a>
    <a id="Loot:GetItemCount" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/GetItemCount.html">GetItemCount</a>
    <a id="Loot:GetItems" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/GetItems.html">GetItems</a>
    <a id="Loot:GetLootOwner" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/GetLootOwner.html">GetLootOwner</a>
    <a id="Loot:GetLootType" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/GetLootType.html">GetLootType</a>
    <a id="Loot:GetMaxSlotForPlayer" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/GetMaxSlotForPlayer.html">GetMaxSlotForPlayer</a>
    <a id="Loot:GetMoney" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/GetMoney.html">GetMoney</a>
    <a id="Loot:GetQuestItems" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/GetQuestItems.html">GetQuestItems</a>
    <a id="Loot:GetRoundRobinPlayer" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/GetRoundRobinPlayer.html">GetRoundRobinPlayer</a>
    <a id="Loot:GetSourceWorldObject" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/GetSourceWorldObject.html">GetSourceWorldObject</a>
    <a id="Loot:GetUnlootedCount" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/GetUnlootedCount.html">GetUnlootedCount</a>
    <a id="Loot:HasItem" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/HasItem.html">HasItem</a>
    <a id="Loot:HasItemForAll" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/HasItemForAll.html">HasItemForAll</a>
    <a id="Loot:HasOverThresholdItem" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/HasOverThresholdItem.html">HasOverThresholdItem</a>
    <a id="Loot:HasQuestItems" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/HasQuestItems.html">HasQuestItems</a>
    <a id="Loot:IsEmpty" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/IsEmpty.html">IsEmpty</a>
    <a id="Loot:IsLooted" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/IsLooted.html">IsLooted</a>
    <a id="Loot:RemoveItem" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/RemoveItem.html">RemoveItem</a>
    <a id="Loot:RemoveLooter" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/RemoveLooter.html">RemoveLooter</a>
    <a id="Loot:SetContainer" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/SetContainer.html">SetContainer</a>
    <a id="Loot:SetItemLooted" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/SetItemLooted.html">SetItemLooted</a>
    <a id="Loot:SetLootOwner" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/SetLootOwner.html">SetLootOwner</a>
    <a id="Loot:SetLootType" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/SetLootType.html">SetLootType</a>
    <a id="Loot:SetMoney" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/SetMoney.html">SetMoney</a>
    <a id="Loot:SetRoundRobinPlayer" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/SetRoundRobinPlayer.html">SetRoundRobinPlayer</a>
    <a id="Loot:SetSourceWorldObject" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/SetSourceWorldObject.html">SetSourceWorldObject</a>
    <a id="Loot:SetUnlootedCount" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/SetUnlootedCount.html">SetUnlootedCount</a>
    <a id="Loot:UpdateItemIndex" class="block truncate rounded px-2.5 py-1 text-sm hover:bg-ink-raised hover:text-body-bright" href="../Loot/UpdateItemIndex.html">UpdateItemIndex</a>
  </div>
</div>
`);